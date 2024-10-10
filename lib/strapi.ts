const { NEXT_PUBLIC_BACKEND_URL } = process.env

export function query (url: string) {
    return fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/${url}`).then(res => res.json())
}