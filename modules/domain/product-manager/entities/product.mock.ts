import { Product, ProductAvailabilityStatus } from 'modules/domain/product-manager/entities/product'

export const productMock: Product = {
    id: 'random-id',
    vendorId: 'random-id',
    name: 'New Baggy Jeans',
    description: 'Description 1',
    price: 100,
    discountedPrice: 0,
    images: [
        'https://images.pexels.com/photos/1129019/pexels-photo-1129019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    categoryId: '1',
    attributes: {},
    stock: 100,
    sku: '1234567890',
    availabilityStatus: ProductAvailabilityStatus.LIMITED_AVAILABILITY,
    status: 'DRAFT',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: '1',
}
