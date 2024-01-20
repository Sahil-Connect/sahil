locals {
  decoded_key      = jsondecode(base64decode(google_service_account_key.gcs-admin-key.private_key))
  run_service_name = "sahil-remote-cache-runner"
}