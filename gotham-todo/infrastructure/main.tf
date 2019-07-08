provider "aws" {
  region = "ap-southeast-1"
}

terraform {
  required_version = "~>0.12.0"
}

data "aws_caller_identity" "current" {}
