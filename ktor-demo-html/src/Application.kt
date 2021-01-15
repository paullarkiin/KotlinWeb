package com.example

import io.ktor.application.*
import io.ktor.features.*
import io.ktor.html.*
import io.ktor.http.cio.parsePart
import io.ktor.routing.*
import kotlinx.html.*

fun Application.main() {
    install(DefaultHeaders)
    install(CallLogging)

    routing {
        get("/") {
            call.respondHtml {
                head {
                    title { +"Ktor: html" }
                }
                body {
                    ul {
                        li { + "Home" }
                        li { +"About" }
                        li { +"Blog" }
                    }
                    h1 {
                        +"Static Website in Ktor"
                    }
                    p {
                        +"Hello from ktor html test"
                    }
                    p {
                        +"More text"
                    }
                    footer {
                        p{
                            +"This is a footer"
                        }
                    }

                }
            }
        }

    }
}



