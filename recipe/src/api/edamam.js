import axios from "axios";


//https://developer.edamam.com/
//gmail Yxxxx2x..
//https://developer.edamam.com/admin/applications/choose_service
//https://developer.edamam.com/admin/applications/new?service_id=recipe-search
//https://developer.edamam.com/admin/applications/1409624894555?service_id=2555417725632

const API_ID = "4e7401b4"
const API_KEY = "7c9b0996e359fa78e3354dfd52e0a154"
const BASE_URL = "https://api.edamam.com"

export const fetchRecipes = async (inputText) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/search`, {
                params: {
                    q: inputText,
                app_id: API_ID,
                app_key: API_KEY
                        }}
                    )
        return response.data
    } catch (error) {
        console.error("Tarifler çekilirken hata oluştu.", error)
        throw error
    }
}