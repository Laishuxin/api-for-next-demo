package main

import (
	"go_gin_2/config"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

// const PORT = 8888
const PREFIX = "/api"

var (
	db *gorm.DB = config.SetupDatabaseConnection()
)

func main() {

	defer config.CloseDatabaseConnection(db)
	router := gin.Default()

	api := router.Group(PREFIX)

	api.GET("", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "ok",
		})
	})

	router.Run()
}
