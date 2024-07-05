package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.GET("/text", func(c *gin.Context) { c.String(200, "Hello Wooorld") })

	router.Run(":5000")
}
