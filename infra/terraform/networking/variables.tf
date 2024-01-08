variable "project_id" {
  description = "The ID of the GCP project "
  default = ""
}

variable "project_number" {
  description = "The unique project number"
  default = ""
}

variable "prod_region" {
  description = "The region to deploy the resources"
  default = "us-west1"
}

variable "dev_region" {
  description = "The region to deploy the resources"
  default = "us-central1"
}

variable "service_account" {
  description = "The email address of the service account"
  default = ""
}


