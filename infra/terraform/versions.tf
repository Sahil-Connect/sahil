terraform {
  required_version = "~> 1"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.61.0"
    }
  }

  backend "s3" {
    encrypt = true

    bucket         = "sahil-terraform-state-bucket" 
    dynamodb_table = "sahil-terraform-table-locks"     
    region         = "eu-west-1"
    assume_role {
    role_arn = "arn:aws:iam::${vars.ACCOUNT_ID}:role/${vars.ROLE_NAME}"
  }
  }
}