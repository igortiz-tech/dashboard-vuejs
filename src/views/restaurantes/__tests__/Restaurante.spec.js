import { describe, it, expect } from "vitest";
import { createVuetify } from "vuetify";
import { mount } from "@vue/test-utils";
import Index from "../Index.vue";


describe("Restaurante", () => {
  const vuetify = createVuetify()

  it("Existe uma pagina restaurante", () => {
    const wrapper = mount(Index,{
      global: {
        plugins: [vuetify],
      }
    });
    expect(wrapper.html()).toMatchSnapshot()
  });

  // it("Existe uma tabela", () => {
  //   const wrapper = mount(Index,{
  //     global: {
  //       plugins: [vuetify],
  //     }
  //   })
  //   const table = wrapper.find('v-table')
  //   expect(table.exists()).true;
  // });


  it("Clicar no botao", async () => {
    const wrapper = mount(Index,{
      global: {
        plugins: [vuetify],
      }
    })

    await wrapper.get('button').trigger('click');




  });

  // it("buscarRestaurante returno vazio", () => {
  //   const wrapper = mount(Index,{
  //     global: {
  //       plugins: [vuetify],
  //     }
  //   })
  //   wrapper.vm.buscarListaDeRestaurantes();
  //   expect(wrapper.vm.itens.length == 0).true;
  // });
});
