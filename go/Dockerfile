FROM golang:1.18

WORKDIR /usr/src/app

COPY hello-world.go .
RUN go build hello-world.go

CMD ["./hello-world"]
