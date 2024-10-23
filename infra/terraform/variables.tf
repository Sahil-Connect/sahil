variable "repository_name" {
  description = "Name of the repo"
  type        = string
}

variable "iam_role" {
  type        = string
  description = "Self-hosted runner EC2 instance role"
}

variable "lifecycle_policy" {
  type        = string
  description = "the lifecycle policy to be applied to the ECR repo"
  default     = <<EOF
{ 
  "rules" = [
    {
      "rulePriority": 1,
      "description": "Keep last 10 images",
      "selection": {
        "tagStatus": "tagged",
        "tagPrefixList": [ "website", "client", "agent", "api", "courier", "admin" ],
        "countType": "imageCountMoreThan",
        "countNumber": 10
      },
      action = {
        type = "expire"
      }
    },
    {
      rulePriority = 2,
      description  = "Expire images older than 14 days",
      selection = {
        tagStatus   = "untagged",
        countType   = "sinceImagePushed",
        countUnit   = "days",
        countNumber = 14
      },
      action = {
        type = "expire"
      }
    }
  ]
}
EOF
}

variable "aws_account_id" {
  description = "Target AWS Account ID"
  type        = string
}