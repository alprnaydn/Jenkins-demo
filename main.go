package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.GET("/text", func(c *gin.Context) { c.String(200, "Hello Woorld") })

	router.Run(":5000")
}
