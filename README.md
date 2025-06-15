API de Productos - Mercado Libre

 Endpoint
 GET https://api.mercadolibre.com/sites/MLA/search?q=iphone

 {
  "site_id": "MLA",
  "query": "iphone",
  "paging": { ... },
  "results": [ ... ],
  "sort": { ... },
  "available_filters": [ ... ]
}

#Campos principales
[***********************************************************************************************]
| Campo                         | Tipo          | Descripción                                   |
| -------------                 | ------------- | --------------------------------------------- |
| site_id                       | string        | ID del sitio regional. Ej: MLA para Argentina |
| country_default_time_zone     | string        | Zona horaria del país                         |
| query                         | string        | Término buscado                               |
| paging                        | object        | Información sobre la paginación de resultados |
| results                       | array         | Listado de productos (ver estructura abajo)   |
| sort                          | object        | Ordenamiento aplicado                         |
| available_filters             | array         | Filtros disponibles que pueden aplicarse      |
[***********************************************************************************************]

#Resultados (results)
-Cada objeto en results representa un producto:
[***********************************************************************************************]
| Campo                         | Tipo          | Descripción                                   |
| -------------                 | ------------- | --------------------------------------------- |
| id                            | string        | ID único del producto                         |
| title                         | string        | Título del producto                           |
| condition                     | string        | Condición: new o used                         |
| thumbnail                     | string        | URL de imagen miniatura                       |
| price                         | number        | Precio en moneda local                        |
| currency_id                   | string        | Código de moneda                              |
| available_quantity            | number        | Cantidad disponible                           |
| sold_quantity                 | number        | Unidades vendidas                             |
| accepts_mercadopago           | boolean       | Indica si acepta MercadoPago                  |
| permalink                     | string        | URL del producto                              |
[***********************************************************************************************]



#Envío (shipping)
[***********************************************************************************************]
| Campo                         | Tipo          | Descripción                                   |
| -------------                 | ------------- | --------------------------------------------- |
| free_shipping                 | boolean       | Indica si el envío es gratuito                |
| logistic_type                 | string        | Tipo de logística (ej: xd_drop_off)           |
| mode                          | string        | Modo de envío (me2, etc.)                     |
[***********************************************************************************************]


#Vendedor (seller)
[***********************************************************************************************]
| Campo                         | Tipo          | Descripción                                   |
| -------------                 | ------------- | --------------------------------------------- |
| nickname                      | string        | Nombre público del vendedor                   |
| registration_date             | string        | Fecha de alta en la plataforma                |
| seller_reputation             | object        | Métricas como ventas, cancelaciones           |
[***********************************************************************************************]


#Atributos (attributes)
-Atributos técnicos del producto como:
[*************************************************************************************************]
| ID                            | Ejemplo valor   | Descripción                                   |
| -------------                 | --------------- | --------------------------------------------- |
| BRAND                         | “Apple”         | Marca del producto                            |
| MODEL                         | “iPhone 13”     | Modelo                                        |
| PROCESSOR_MODEL               | “Apple A15”     | Procesador                                    |
| WEIGHT                        | “173 g”         | Peso del dispositivo                          |
[*************************************************************************************************]

#Filtros disponibles (available_filters)
[*************************************************************************************************]
| ID                            | Nombre          | Tipo                                          |
| -------------                 | --------------- | --------------------------------------------- |
| discount                      | Descuentos      | number                                        |
| price                         | Rango de precios| range                                         |
| accepts_mercadopago           | MercadoPago     | boolean                                       |
| installments                  | Cuotas          | text                                          |
[*************************************************************************************************]


#Ordenamiento (sort)
[*************************************************]
| Campo                         | Descripción     |
| -------------                 | --------------- |
| discount                      | Descuentos      |
| price                         | Rango de precios|
| accepts_mercadopago           | MercadoPago     |
| installments                  | Cuotas          |
[*************************************************]
Ejemplo: price_asc → Menor precio.


 Uso sugerido en frontend
	•	Usar results para renderizar tarjetas o tablas de productos.
	•	Mostrar filters como tags aplicados o en filtros activos.
	•	Ofrecer available_filters como opciones interactivas.
	•	Implementar paginación basada en paging.