#!/bin/bash

#####################################################
# VPS Deployment Script for Landing Page
# This script automates pulling and deploying your
# Docker image from GitHub Container Registry
#####################################################

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Default configuration
CONTAINER_NAME="landing-page"
PORT="80"
IMAGE_TAG="latest"

# Functions
print_banner() {
    echo -e "${CYAN}"
    echo "╔════════════════════════════════════════╗"
    echo "║   Landing Page VPS Deployment Script  ║"
    echo "╔════════════════════════════════════════╗"
    echo -e "${NC}\n"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_step() {
    echo -e "\n${CYAN}▶ $1${NC}\n"
}

# Check if Docker is installed
check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed!"
        echo ""
        echo "To install Docker, run:"
        echo "  curl -fsSL https://get.docker.com -o get-docker.sh"
        echo "  sudo sh get-docker.sh"
        exit 1
    fi
    print_success "Docker is installed"
}

# Check if user has Docker permissions
check_docker_permissions() {
    if ! docker