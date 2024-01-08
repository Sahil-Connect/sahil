# local variables
locals {
  project_id                         = var.project_id
  project_number                     = var.project_number
  network                            = var.network
  subnetwork                         = var.subnetwork
  region                             = var.region
  service_name                       = var.service_name
  concurrency                        = var.concurrency
  service_account                    = var.service_account
  timeout                            = var.timeout
  image_url                          = var.image_url
  #load_balancer_address_name         = var.load_balancer_address_name
  #load_balancer_backend_name         = var.load_balancer_backend_name
  #load_balancer_url_map_name         = var.load_balancer_url_map_name
  #load_balancer_proxy_name           = var.load_balancer_proxy_name
  #load_balancer_forwarding_rule_name = var.load_balancer_forwarding_rule_name
  google_api_services = [
    "cloudbilling.googleapis.com",
    "serviceusage.googleapis.com",
    "run.googleapis.com",
    "cloudresourcemanager.googleapis.com",
    "containerregistry.googleapis.com",
    "iam.googleapis.com",
    "dns.googleapis.com",
    "compute.googleapis.com",
    "sql-component.googleapis.com"
  ]
  required_roles = [
    "roles/run.admin",
    "roles/run.invoker",
    "roles/iam.serviceAccountUser",
    "roles/logging.logWriter",
    "roles/storage.admin",
    "roles/storage.objectViewer",
    "roles/owner",
    "roles/resourcemanager.projectIamAdmin",
    "roles/domains.admin",
    "roles/cloudsql.admin",
    "roles/compute.networkUser",
    "roles/servicenetworking.networksAdmin"
  ]
  #managed_domains = tolist(["sahil.com", "www.sahil.com"])
}

# google provider
provider "google" {
  project = local.project_id
  region  = local.region
}

# Enable Google Cloud APIs
resource "google_project_service" "enabled" {
  for_each           = toset(local.google_api_services)
  service            = each.key
  disable_on_destroy = false
}

# Assign required roles/rights to the default service account
resource "google_project_iam_member" "default_service_account_roles" {
  project  = local.project_id
  for_each = toset(local.required_roles)
  role     = each.key
  member   = "serviceAccount:${local.project_number}-compute@developer.gserviceaccount.com"
  lifecycle {
    prevent_destroy = true
  }
}

#===============================================================
data "google_compute_network" "mw_default" {
  name = local.network
}
data "google_compute_subnetwork" "mw_default" {
  name   = local.subnetwork
  region = "us-east1"
}

# Create or Update Cloud Run service
resource "google_cloud_run_service" "sahil_website_dev_svc" {
  name     = local.service_name
  location = local.region
  provider = google-beta
  template {
    spec {
      containers {
        image = local.image_url
        resources {
          limits = {
            cpu    = "1000m"
            memory = "512M"
          }
        }
      }
    }
  }
  traffic {
    percent         = 100
    latest_revision = true
  }
}

# allow everyone on internet to access this cloud run service 
resource "google_cloud_run_service_iam_member" "cloud_run_svc_invoker_policy_1" {
  project  = local.project_id
  service  = google_cloud_run_service.sahil_website_dev_svc.name
  location = google_cloud_run_service.sahil_website_dev_svc.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

#===================================================
output "url" {
  value = google_cloud_run_service.sahil_website_dev_svc.status[0].url
}

