# hello-world

## Why another one?
Because I couldn't find a minimilistic container to return the following:

```
{
  message: "Hello Word",
  date: "2018-07-14T12:41:21.981Z"
}
```

## Run it by
`docker run -it -p 3000:3000 <image>`

image=singh1469/hello-world:latest
OR
Clone repo and run `docker build -it hello-world .` giving you a local image-name `hello-world`

## License
MIT
