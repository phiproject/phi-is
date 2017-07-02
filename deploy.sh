#!/bin/sh

aws s3 sync build s3://phi.is --region us-east-1 --delete
