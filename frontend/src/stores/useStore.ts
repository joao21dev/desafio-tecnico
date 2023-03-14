import create, { SetState } from "zustand";
import axios from "axios";

export interface Store {
  id: string;
  cnpj: string;
  description: string;
  fantasyName: string;
  socialName: string;
  storeEmail: string;
  storePhone: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  ownerSecondaryPhone: string;
}

interface StoreState {
  stores: Store[];
  store: Store | null;
  setStore: (store: Store) => void;
  error: Error | null;
  errorMessage: string | null;
  success: boolean;
  cnpjValue: string;
  setCnpjValue: (cnpjValue: string) => void;
  createStore: (storeData: Store) => Promise<void>;
  getStoreByCnpj: (cnpj: string) => Promise<void>;
  getAllStores: () => Promise<void>;
  deleteStore: (id: string) => Promise<void>;
  updateStore: (id: string, storeData: Store) => Promise<void>;
}

export const useStore = create<StoreState>((set: SetState<StoreState>) => ({
  stores: [],
  store: null,
  setStore: (store) => set(() => ({ store })),
  error: null,
  errorMessage: null,
  success: false,
  cnpjValue: "",
  setCnpjValue: (cnpjValue) => set(() => ({ cnpjValue })),
  createStore: async (storeData) => {
    try {
      const response = await axios.post<Store>(
        "http://localhost:3000/stores",
        storeData
      );
      set((state) => ({
        stores: [...state.stores, response.data],
        success: true,
      }));
    } catch (error: any) {
      set(() => ({ error }));
    }
  },

  getStoreByCnpj: async (cnpj) => {
    try {
      const response = await axios.get<Store>(
        `http://localhost:3000/stores/${cnpj}`
      );
      set({ store: response.data, errorMessage: null });
    } catch (error: any) {
      set({ store: null, errorMessage: null });
      if (error.response && error.response.status === 404) {
        set(() => ({ errorMessage: error.response.data.message }));
      } else {
        set(() => ({ error }));
      }
    }
  },

  getAllStores: async () => {
    try {
      const response = await axios.get<Store[]>("http://localhost:3000/stores");
      set(() => ({ stores: response.data }));
    } catch (error: any) {
      set(() => ({ error }));
    }
  },
  deleteStore: async (id) => {
    try {
      await axios.delete(`http://localhost:3000/stores/${id}`);
      set((state) => ({
        stores: state.stores.filter((store) => store.id !== id),
        success: true,
      }));
    } catch (error: any) {
      set(() => ({ error }));
    }
  },
  updateStore: async (id, storeData) => {
    try {
      const response = await axios.patch<Store>(
        `http://localhost:3000/stores/${id}`,
        storeData
      );
      set((state) => ({
        stores: state.stores.map((store) =>
          store.id === response.data.id ? response.data : store
        ),
        success: true,
      }));
    } catch (error: any) {
      set(() => ({ error }));
    }
  },
}));
