// productsService.js

import { logo } from "../../types/images";
import type { TProduct } from "../../types/TProduct";
import { productsData } from "./ProductRepository";

// 1. Importa el JSON. Esto se hace una sola vez al cargar el módulo.

class ProductService {
    
    // 2. Método Getter principal para obtener todos los productos.
    getAll() {
        return productsData;
    }
    async getStaticPaths() {
        return productsData.map((product) => ({
        params: { id: product.id }, // Genera /products/1, /products/2...
        props: { product: product }, // Pasa el objeto completo como prop
    }));
    }

    // 3. El método para obtener un producto específico y rellenar si hace falta.
    getById(id:string):TProduct {
        // Buscar el producto en el array.
        const product = productsData.find(p => p.id === id);

        if (product) {
            return product;
        } else {
            // Lógica de Relleno (ejemplo: devolver un objeto con datos por defecto)
            console.warn(`Producto con ID ${id} no encontrado. Devolviendo datos por defecto.`);
            return this.getEmptyProduct(id);
        }
    }

    // 4. Función de utilidad (privada o interna) para rellenar datos.
    getEmptyProduct(id:string):TProduct {
        return {
            id: id,
            name: "Producto No Encontrado",
            description: "Información no disponible.",
            altText:"",
            imgSrc:"",
            title:"",
            shortDescription:"",
            linkCompras:[],
            imgData:logo.cuadrado
        };
    }
    getByIds(ids:string[]):TProduct[]{
        return productsData.filter(p => ids.includes(p.id));
    }
}

// 5. Exporta una instancia para que todos los archivos usen la misma copia (Singleton).
const productService = new ProductService();
export default productService;