export function Sounds(){
    const audioForest = new Audio("../audio/Floresta.wav?raw=true")
    const audioRain = new Audio("../audio/Chuva.wav?raw=true")
    const audioCafeteria = new Audio("../audio/Cafeteria.wav?raw=true")
    const audioFireplace = new Audio("../audio/Lareira.wav?raw=true")

    
    function cancelAudio(){
        audioForest.pause()
        audioRain.pause()
        audioCafeteria.pause()
        audioFireplace.pause()
    }

    return{
        audioForest,
        audioRain,
        audioCafeteria,
        audioFireplace,
        cancelAudio
    }

}