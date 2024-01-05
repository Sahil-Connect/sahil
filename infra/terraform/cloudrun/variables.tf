variable "project_id" {
  description = "The ID of the GCP project to deploy the Cloud Run service to."
}

variable "project_number" {
  description = "The unique project number"
}

variable "network" {
  description = "The VPC network to deploy the Cloud Run service to."
}

variable "subnetwork" {
  description = "The VPC sub-network to deploy the Cloud Run service to."
}

variable "region" {
  description = "The region to deploy the Cloud Run service to."
}

variable "service_name" {
  description = "The name of the Cloud Run service."
}

variable "image_url" {
  description = "The URL of the container image to deploy to the Cloud Run service."
}

variable "concurrency" {
  description = "The maximum number of concurrent requests that the Cloud Run service can accept."
  default     = 80
}

variable "timeout" {
  description = "The maximum time in seconds that the Cloud Run service can take to respond to a request."
  default     = 300
}

variable "service_account" {
  description = "The email address of the service account to use for the Cloud Run service."
}

variable "domain_name" {
  default = "sahil.com"
}

