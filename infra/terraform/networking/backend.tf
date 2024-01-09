terraform {
  required_version = ">= 0.13"
  backend "gcs" {
    bucket = "sahil-terraform"
    prefix = "sahil-networking-tfstate"
  }
  required_providers {
    google = {
      version = "~> 4.0.0"
    }
    google-beta = {
      version = "~> 4.0.0"
    }
  }
}
