export type FilterType = {
    result: ResultFilterType | null;
    loading: boolean;
    error: string
}

export type ResultFilterType = {
    schema: {
        attributes: {
            gender: {
                enum: any
            }
        }
    }
}