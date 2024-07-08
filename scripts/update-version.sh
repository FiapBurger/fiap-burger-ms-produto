#!/bin/bash

# Configurar a identidade do Git
git config --global user.email "fiapburger.tech@gmail.com"
git config --global user.name "FiapBurger"

# Fetch tags from remote
git fetch --tags

# Get the current version from the latest tag
CURRENT_VERSION=$(git describe --tags $(git rev-list --tags --max-count=1) 2>/dev/null || echo "0.0.0")

# If the current version is 0.0.0, initialize the next version as 0.0.1
if [ "$CURRENT_VERSION" = "0.0.0" ]; then
  NEXT_VERSION="0.0.1"
else
  # Increment the patch version
  NEXT_VERSION=$(npx semver "$CURRENT_VERSION" -i patch)
fi

echo "Current version: $CURRENT_VERSION"
echo "Next version: $NEXT_VERSION"

# Set the next version as the output using environment files
echo "version=$NEXT_VERSION" >> $GITHUB_ENV

# Tag the new version
git tag -a "$NEXT_VERSION" -m "Release version $NEXT_VERSION"

# Authenticate using the PAT and push the new tag
git remote set-url origin https://$PERSONAL_ACCESS_TOKEN@github.com/FiapBurger/fiap-burger-ms-produto.git
git push origin "$NEXT_VERSION"