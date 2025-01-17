# Pre-built images

ui-server can be consumed from Docker Hub: https://hub.docker.com/r/temporalio/ui

# Build docker image

Replace **YOUR_TAG** and **YOUR_CHECKOUT_COMMIT** in the below command to build:

``` bash
git checkout YOUR_CHECKOUT_COMMIT
docker build -t temporalio/ui:YOUR_TAG .
```

### Serve UI under a sub-path

> Public Path is currently disabled in all versions except for v2.6.0 (sha 2987d4e). More info https://github.com/temporalio/ui-server/releases/tag/v2.6.1

To change the public path under which the UI is served you will want to build your own docker image

Clone the repo

``` bash
git clone https://github.com/temporalio/ui-server.git
cd ui-server
```

Checkout v2.6.0

``` bash
git checkout 2987d4e
```

Build the image

``` bash
make install-submodules
docker build --build-arg TEMPORAL_PUBLIC_PATH=/custom-path -t temporal-ui .
```

Run the image

```
docker run -d --network host -e TEMPORAL_PUBLIC_PATH=/custom-path -t temporal-ui
```

Then navigate to http://localhost:8080/custom-path

## Quickstart for production

To use the container in a production setting, use the following command:

```shellscript
docker run \
    -e TEMPORAL_ADDRESS=127.0.0.1:7233 \                                    -- Temporal Frontend Address
    -e TEMPORAL_UI_PORT=8080 \                                              -- Port to serve HTTP API and UI on
    -e TEMPORAL_AUTH_ENABLED=true \                                         -- Enable auth
    -e TEMPORAL_AUTH_PROVIDER_URL=https://accounts.google.com \             -- Auth OIDC provider URL
    -e TEMPORAL_AUTH_CLIENT_ID=xxxxx-xxxx.apps.googleusercontent.com \      -- Auth client ID
    -e TEMPORAL_AUTH_CLIENT_SECRET=xxxxxxxxxxxxxxx \                        -- Auth client secret
    -e TEMPORAL_AUTH_CALLBACK_URL=https://xxxx.com:8080/auth/sso/callback \ -- Auth callback URL
    -e TEMPORAL_UI_ENABLED=true \                                           -- Serve UI
    -e TEMPORAL_OPENAPI_ENABLED=true \                                      -- Serve Open API UI
    -e TEMPORAL_TLS_CA=../ca.cert \                                         -- TLS Certificate Authority path
    -e TEMPORAL_TLS_CERT=../cluster.pem \                                   -- TLS cert path
    -e TEMPORAL_TLS_KEY=../cluster.key \                                    -- TLS key path
    -e TEMPORAL_TLS_ENABLE_HOST_VERIFICATION=true \                         -- TLS enable host verification
    -e TEMPORAL_TLS_SERVER_NAME=tls-server \                                -- TLS server name
    temporalio/ui:<tag>
```
