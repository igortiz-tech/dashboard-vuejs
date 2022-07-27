import {createVuetify} from "vuetify";
import { describe, it, expect , test} from "vitest"

import {flushPromises} from "@vue/test-utils"
import restauranteService from "../restaurantesServices"

const mocklistaDeRestaurante = [
    {
        "id": 3,
        "nome": "RU Teste",
        "data_inicio": "2022-07-18 00:00:00",
        "data_termino": null,
        "cidade_id": 14,
        "created_at": null,
        "updated_at": null
    },
    {
        "id": 4,
        "nome": "RU teste 2",
        "data_inicio": "2022-07-20 00:00:00",
        "data_termino": null,
        "cidade_id": 16,
        "created_at": null,
        "updated_at": null
    }
];

const spy = vi.spyOn(restauranteService, 'index').mockImplementation(() => mocklistaDeRestaurante);


describe("Busca lista de restaurantes",  () => {
    const vuetify = createVuetify()
    it("renders properly", async() => {
        const result = restauranteService.index({});
        await flushPromises();

        expect(restauranteService.index({})).toBe(mocklistaDeRestaurante)
        expect(spy).toHaveBeenCalled()
    })
})

/*referencias*/
/*


    https://br.vuejs.org/v2/guide/unit-testing.html
    https://test-utils.vuejs.org/guide/advanced/http-requests.html#a-list-of-blog-posts
    https://medium.com/magnetis-backstage/fazendo-uma-aplica%C3%A7%C3%A3o-em-vue-js-com-tdd-um-guia-extensivo-para-quem-quer-aprender-parte-4-1238eb02a41
    https://iobio.io/user_guides/2019/05/20/vue-js-unit-testing-with-jest/
    https://v1.test-utils.vuejs.org/api/createlocalvue.html



 */