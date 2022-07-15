package helper

import "strings"

type Response struct {
	//isOk
	Status  bool        `json:"status"`
	Message string      `json:"message"`
	Errors  interface{} `json:"errors"`
	Data    interface{} `json:"data"`
}

type EmptyObject struct{}

func BuildResponse(status bool, message string, data interface{}) Response {
	return Response{
		Data:    data,
		Status:  status,
		Message: message,
		Errors:  nil,
	}
}

func BuildErrorResponse(message string, err string, data interface{}) Response {
	splittedError := strings.Split(err, "\n")
	return Response{
		Status:  false,
		Message: message,
		Errors:  splittedError,
		Data:    data,
	}
}
