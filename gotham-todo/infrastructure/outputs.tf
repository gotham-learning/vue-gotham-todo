output "s3_bucket_name" { value = aws_s3_bucket.app_hosting.bucket }
output "s3_bucket_endpoint" { value = aws_s3_bucket.app_hosting.website_endpoint }
