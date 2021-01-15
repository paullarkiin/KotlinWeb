import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.random.Random


fun main() {
    val canvas = document.getElementById("myCanvas") as HTMLCanvasElement
    val ctx = canvas.getContext("2d") as CanvasRenderingContext2D
    with(ctx){
        repeat(50){
            beginPath()
            fillStyle = listOf("red", "green", "blue").random()
            rect(randomCoordinate(),randomCoordinate(), 20.0, 20.0)
            fill()
            closePath()
        }
    }
}

fun randomCoordinate() = Random.nextDouble(0.0, 200.00)