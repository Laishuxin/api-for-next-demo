package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

const PORT = 8888
const PREFIX = "/api"

func main() {
	router := gin.Default()

	v1 := router.Group(PREFIX)

	v1.GET("", func(ctx *gin.Context) {
		fmt.Printf("get.")
		ctx.JSON(http.StatusOK, gin.H{
			"message": "ok",
		})
	})

	if err := router.Run(fmt.Sprintf(":%d", PORT)); err != nil {
		fmt.Printf("err: %v\n", err)
		panic(err)
	}
}
