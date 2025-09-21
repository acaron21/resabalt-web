const API_URL = import.meta.env.VITE_API_URL

export const sayHello = async (name:string) => {
    const res = await fetch(`${API_URL}/api/hello`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name})
    })

    const data = await res.json();
    return data.message
}