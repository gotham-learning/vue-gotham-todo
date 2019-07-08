locals {
  bucket_name = "app-${data.aws_caller_identity.current.account_id}"
}

resource "aws_s3_bucket" "app_hosting" {
  bucket = local.bucket_name
  acl    = "public-read"
  policy = data.aws_iam_policy_document.bucket_policy.json

  website {
    index_document = "index.html"
  }
}

data "aws_iam_policy_document" "bucket_policy" {
  statement {
    sid    = "PublicReadGetObject"
    effect = "Allow"
    principals {
      type        = "*"
      identifiers = ["*"]
    }
    resources = ["arn:aws:s3:::${local.bucket_name}/*"]
    actions   = ["s3:GetObject"]
  }
}

