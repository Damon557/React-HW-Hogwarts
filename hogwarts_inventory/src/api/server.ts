let token = ``

export const serverCalls = {
    get: async () => {
        const response = await fetch(``,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()

    },

    create: async(data:{}) => {
        const response = await fetch(``, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer: ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }
        return await response.json()
    },
    update: async (id:string, data:{}) => {
        const response = await fetch(`/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer: ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Failed to Update Drone Id ${id} on server`)
        }
        return await response.json()
    },
    delete: async (id: string, data: {}) => {
        const response = await fetch(`/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer: ${token}`
            }            
        });

        if (!response.ok) {
            throw new Error(`Failed to Delete ${id} on server`)
        }
        return await response.json()
    }

}