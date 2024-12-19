# Website Docker Build & Publish Workflow

This document describes the GitHub Actions workflow for building and publishing the website Docker image to Amazon ECR.

## Workflow Overview

The workflow `sahil-website.yml` handles the building and publishing of Docker images for the website component. It creates/updates an ECR repository and pushes the Docker image to it.

## Triggers

The workflow runs on manual trigger (`workflow_dispatch`) with configurable inputs:

| Input Parameter | Description | Default Value |
|----------------|-------------|---------------|
| path_to_dockerfile | Path to the Dockerfile | `infra/docker/Dockerfile.website` |
| docker_build_dir | Docker build context directory | `.` |
| image_tag | Tag for the Docker image | `sahil-website` |
| lifecycle_policy_file | ECR lifecycle policy file path | `policy.json` |
| backend_s3_bucket | S3 bucket for Terraform state | `sahil-terraform-state-bucket` |
| backend_iam_role | IAM role for Terraform backend | `workload-assumable-role` |
| github_iam_role | IAM role for ECR access | `github-actions-role` |
| aws_account_id | AWS Account ID | `060795911441` |
| aws_region | AWS Region | `eu-west-1` |
| backend_dynamodb_table | DynamoDB table for state locking | `sahil-terraform-table-locks` |


It also runs on push to the `develop` and `main` branches.

## Workflow Steps

1. **Checkout Repository**
   - Checks out the repository code

2. **AWS Credentials Configuration**
   - Configures AWS credentials using OIDC authentication
   - Assumes the `sahil-deployment-role`

3. **Terraform Setup**
   - Installs Terraform CLI
   - Disables Terraform wrapper

4. **ECR Repository Preparation**
   - Generates ECR repository name from GitHub repository name
   - Converts to lowercase and replaces '/' with '_'

5. **Terraform Initialization**
   - Initializes Terraform with backend configuration
   - Uses S3 for state storage and DynamoDB for state locking

6. **ECR Repository Creation**
   - Applies Terraform configuration to create/update ECR repository
   - Configures lifecycle policies and IAM permissions

7. **ECR Authentication**
   - Logs into Amazon ECR

8. **Docker Build & Push**
   - Builds Docker image using specified Dockerfile
   - Tags image with provided tag
   - Pushes image to ECR repository

## Outputs

The workflow produces two outputs:
- `image_tag`: The tag applied to the built image
- `full_image`: The complete ECR image URI

## Concurrency Control

The workflow uses concurrency control to prevent simultaneous runs that could cause Terraform state lock conflicts: 