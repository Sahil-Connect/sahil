# local variables
locals {
  project_id                         = var.project_id
  project_number                     = var.project_number
  service_account                    = var.service_account
  #load_balancer_address_name         = var.load_balancer_address_name
  #load_balancer_backend_name         = var.load_balancer_backend_name
  #load_balancer_url_map_name         = var.load_balancer_url_map_name
  #load_balancer_proxy_name           = var.load_balancer_proxy_name
  #load_balancer_forwarding_rule_name = var.load_balancer_forwarding_rule_name
  google_api_services = [
    "cloudbilling.googleapis.com",
    "serviceusage.googleapis.com",
    "cloudresourcemanager.googleapis.com",
    "iam.googleapis.com",
    "dns.googleapis.com",
    "compute.googleapis.com",
  ]
  required_roles = [
    "roles/iam.serviceAccountUser",
    "roles/logging.logWriter",
    "roles/storage.admin",
    "roles/storage.objectViewer",
    "roles/owner",
    "roles/resourcemanager.projectIamAdmin",
    "roles/compute.networkUser",
    "roles/servicenetworking.networksAdmin"
  ]
  #managed_domains = tolist(["sahil.com", "www.sahil.com"])
}

# google provider
provider "google" {}

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
# Create development vpc network
resource "google_compute_network" "developmentnet" {
  name                    = "developmentnet"
  auto_create_subnetworks = "false"
}

# Create development vpc subnetwork
resource "google_compute_subnetwork" "devsubnet-core" {
  name          = "devsubnet-core"
  region        =  var.dev_region
  network       = google_compute_network.developmentnet.self_link
  ip_cidr_range = "10.1.0.0/28"
}

resource "google_compute_subnetwork" "devsubnet-core" {
  name          = "devsubnet-partner"
  region        =  var.dev_region
  network       = google_compute_network.developmentnet.self_link
  ip_cidr_range = "10.2.0.0/28"
}

# Create a firewall rule to allow HTTP, SSH, RDP and ICMP traffic
resource "google_compute_firewall" "developmentnet_allow_http_ssh_rdp_icmp" {
  name    = "developmentnet-allow-http-ssh-rdp-icmp"
  source_ranges = [
    "0.0.0.0/0"
  ]
  network = google_compute_network.developmentnet.self_link

  allow {
    protocol = "tcp"
    ports    = ["22", "80", "8080"]
  }

  allow {
    protocol = "icmp"
  }
}

#===================================================
# Create production vpc network
resource "google_compute_network" "productionnet" {
  name                    = "productionnet"
  auto_create_subnetworks = "false"
}

# Create production vpc subnetwork
resource "google_compute_subnetwork" "prodsubnet-core" {
  name          = "prodsubnet-core"
  region        =  var.prod_region
  network       = google_compute_network.productionnet.self_link
  ip_cidr_range = "10.1.0.0/28"
}

resource "google_compute_subnetwork" "prodsubnet-core" {
  name          = "prodsubnet-partner"
  region        =  var.prod_region
  network       = google_compute_network.productionnet.self_link
  ip_cidr_range = "10.2.0.0/28"
}

# Create a firewall rule to allow HTTP, SSH, RDP and ICMP traffic
resource "google_compute_firewall" "productionnet_allow_http_ssh_rdp_icmp" {
  name    = "productionnet-allow-http-ssh-rdp-icmp"
  source_ranges = [
    "0.0.0.0/0"
  ]
  network = google_compute_network.productionnet.self_link

  allow {
    protocol = "tcp"
    ports    = ["22", "80", "8080"]
  }

  allow {
    protocol = "icmp"
  }
}

#===================================================
output "url" {
  value = google_compute_network.developmentnet.status[0].url
}

