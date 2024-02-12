provider "google" {
  credentials = file("../../keys/credentials.json")
  project     = var.project_id
  region      = var.region
}