using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Amazon.Lambda.Core;
using Amazon.Lambda.S3Events;
using Amazon.S3;
using Amazon.S3.Util;
using Amazon.S3.Model;


// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace FileRoutingService
{
    public class Function
    {
        IAmazonS3 S3Client { get; set; }

        /// <summary>
        /// Default constructor. This constructor is used by Lambda to construct the instance. When invoked in a Lambda environment
        /// the AWS credentials will come from the IAM role associated with the function and the AWS region will be set to the
        /// region the Lambda function is executed in.
        /// </summary>
        public Function()
        {
            S3Client = new AmazonS3Client();
        }

        /// <summary>
        /// Constructs an instance with a preconfigured S3 client. This can be used for testing the outside of the Lambda environment.
        /// </summary>
        /// <param name="s3Client"></param>
        public Function(IAmazonS3 s3Client)
        {
            this.S3Client = s3Client;
        }

        /// <summary>
        /// This method is called for every Lambda invocation. This method takes in an S3 event object and can be used 
        /// to respond to S3 notifications.
        /// </summary>
        /// <param name="evnt"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        public async Task<string> FunctionHandler(S3Event evnt, ILambdaContext context)
        {
            var s3Event = evnt.Records?[0].S3;
            if (s3Event == null)
            {
                return null;
            }

            try
            {
                var response = await this.S3Client.GetObjectMetadataAsync(s3Event.Bucket.Name, s3Event.Object.Key);
                context.Logger.LogLine("File is inserted : " + s3Event.Object.Key);
                string accessKey = "";//your access key
                string secretKey = ""//Yoour secret keu;

                AmazonS3Config config = new AmazonS3Config();

                AmazonS3Client s3Client = new AmazonS3Client(
                        accessKey,
                        secretKey,
                        config
                        );
                Task<ListBucketsResponse> buckets = s3Client.ListBucketsAsync();
                foreach (S3Bucket b in buckets.Result.Buckets)
                {
                    context.Logger.LogLine(b.BucketName + " " +  b.CreationDate);
                    if (s3Event.Bucket.Name == b.BucketName)
                    {
                        // List all objects
                        ListObjectsRequest listRequest = new ListObjectsRequest
                        {
                            BucketName = b.BucketName,

                        };

                        ListObjectsResponse listResponse;
                        do
                        {
                            // Get a list of objects
                            listResponse = await s3Client.ListObjectsAsync(listRequest);
                            foreach (S3Object obj in listResponse.S3Objects)
                            {
                                context.Logger.LogLine("Object - " + obj.Key);
                                context.Logger.LogLine(" Size - " + obj.Size);
                                context.Logger.LogLine(" LastModified - " + obj.LastModified);
                                context.Logger.LogLine(" Storage class - " + obj.StorageClass);
                            }

                            // Set the marker property
                            listRequest.Marker = listResponse.NextMarker;
                        } while (listResponse.IsTruncated);
                    }
                }
                return response.Headers.ContentType;
            }
            catch (Exception e)
            {
                context.Logger.LogLine($"Error getting object {s3Event.Object.Key} from bucket {s3Event.Bucket.Name}. Make sure they exist and your bucket is in the same region as this function.");
                context.Logger.LogLine(e.Message);
                context.Logger.LogLine(e.StackTrace);
                throw;
            }
        }
    }
}
