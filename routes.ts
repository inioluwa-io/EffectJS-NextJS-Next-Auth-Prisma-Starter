import { addQueryParams } from 'lib/url'
export const routes = {
    home: () => '/',
    store: {
        dashboard: () => '/store/dashboard',
        home: ({ id }: { id: string }) => `/store/${id}`,
        products: ({
            vendorId,
            params,
        }: {
            vendorId: string
            params?: {
                sort: 'newest' | 'price-asc' | 'price-desc'
            }
        }) => addQueryParams(`/store/${vendorId}/products`, params),
        reviews: ({ vendorId }: { vendorId: string }) => `/store/${vendorId}/reviews`,
    },
    product: ({ id }: { id: string }) => `/products/${id}`,
    search: ({
        params,
    }: {
        params?: {
            q?: string
            location?: string
            maxPrice?: number
            minPrice?: number
        }
    }) => addQueryParams('/search', params),
}
