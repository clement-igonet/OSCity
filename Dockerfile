FROM node as builder

# RUN npm install -g typescript

# RUN mkdir -p /src
# WORKDIR /src

# COPY /src /src
# RUN tsc greeter.ts
# RUN ls -altr

COPY /build /build
# RUN cp -r /src/* /build/


FROM abiosoft/caddy

COPY --from=builder /build /srv

