const productos = [
    {
        "id": 1,
        "name": "Auricular Gamer Wesdar GH31 Black RGB RCA",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_36419_Auriculares_Gamer_Wesdar_GH31_Black_RGB_RCA_Y-Adapter__ecfb98b9-grn.jpg",
        "type": "auricular",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 2,
        "name": "Auriculares Wesdar Gaming GH30 Black",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23879_Auriculares_Wesdar_Gaming_GH30_Black_bcd1c3f2-grn.jpg",
        "type": "auricular",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 3,
        "name": "Auriculares Wesdar Gaming GH9 Black",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24014_Auriculares_Wesdar_Gaming_GH9_Black_f166dae0-grn.jpg",
        "type": "auricular",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 4,
        "name": "Auriculares Redragon H120 Ares PC",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_11163_Auriculares_Redragon_H120_Ares_PC_978c684a-grn.jpg",
        "type": "auricular",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 5,
        "name": "Auriculares Redragon H260 Hylas RGB",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28576_Auriculares_Redragon_H260_Hylas_RGB_0ebc59ca-grn.jpg",
        "type": "auricular",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 6,
        "name": "Auriculares HP HyperX Cloud Black Blue",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35919_Auriculares_HP_HyperX_Cloud_Black_Blue_PS4_PS5_bdb54c92-grn.jpg",
        "type": "auricular",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 7,
        "name": "Monitor Philips 19 HDMI VGA",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_11144_Monitor_Philips_19__HDMI_VGA_7c0a1d34-grn.jpg",
        "type": "monitor",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 8,
        "name": "Monitor LG 24 Full HD Bordes Ultra Fino",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16040_Monitor_LG_24__24MK600M_IPS_Full_HD_Bordes_Ultra_Finos__a7b8df97-grn.jpg",
        "type": "monitor",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 9,
        "name": "Monitor Samsung 32 Curvo T550 75Hz",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32205_Monitor_Samsung_32__Curvo_T550_75Hz_6492b25a-grn.jpg",
        "type": "monitor",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 10,
        "name": "Monitor Samsung 22 T350 75Hz IPS FHD",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25643_Monitor_Samsung_22__T350_75Hz_IPS_FHD_FreeSync_a062b781-grn.jpg",
        "type": "monitor",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 11,
        "name": "Monitor LG LED 24'' 24MP400-B 75Hz FHD",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33043_Monitor_LG_LED_24___24MP400-B_75Hz_IPS_FHD_FreeSync_HDMI_d0cb670b-grn.jpg",
        "type": "monitor",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 12,
        "name": "Monitor Samsung 27 Smart M5 Full HD",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_36528_Monitor_Samsung_27__Smart_M5_Full_HD_AirPlay2_Netflix_Youtube_HBO_820539af-grn.jpg",
        "type": "monitor",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 13,
        "name": "Mouse Wesdar Cerberus x4 Black Rainbow",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23868_Mouse_Wesdar_Cerberus_x4_Black_Rainbow_2400DPI_76dc336d-grn.jpg",
        "type": "mouse",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 14,
        "name": "Mouse Logitech M90 Black",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13462_Mouse_Logitech_M90_Black_12e6a9a6-grn.jpg",
        "type": "mouse",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 15,
        "name": "Mouse Redragon Mirage M690 Wireless",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8760_Mouse_Redragon_Mirage_M690_2.5GHz_Wireless_1739dc55-grn.jpg",
        "type": "mouse",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 16,
        "name": "Mouse Logitech M110S Negro Blue USB",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18989_Mouse_Logitech_M110S_Negro_Blue_USB_9ecef8f4-grn.jpg",
        "type": "mouse",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 17,
        "name": "Mouse Redragon Centrophorus M601 RGB",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28612_Mouse_Redragon_Centrophorus_M601_RGB_e00743a5-grn.jpg",
        "type": "mouse",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 18,
        "name": "Mouse Redragon Impact M908 RGB 12.400dpi",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13001_Mouse_Redragon_Impact_M908_RGB_12.400dpi_7502b0f8-grn.jpg",
        "type": "mouse",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 19,
        "name": "Notebook Gamer Asus ROG Zephyrus QHD 14",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30569_Notebook_Gamer_Asus_ROG_Zephyrus_G14_QHD_14__Ryzen_7_4800HS_16GB__2x8GB__512GB_SSD_NVMe_GTX_1650_W10_120Hz_7030dae4-grn.jpg",
        "type": "notebook",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 20,
        "name": "Notebook Lenovo ThinkPad E14 FHD 14",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28952_Notebook_Lenovo_ThinkPad_E14_FHD_14__Core_I7_1165G7_8GB_256GB_SSD_NVMe_Freedos_695c3a03-grn.jpg",
        "type": "notebook",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 21,
        "name": "Notebook Gamer Asus TUF FX516 15.6",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32597_Notebook_Gamer_Asus_TUF_FX516_15.6__FHD_Core_I5_11300H_16GB_512GB_SSD_NVMe_RTX_3050_Freedos_144hz_989a9dde-grn.jpg",
        "type": "notebook",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 22,
        "name": "Notebook Lenovo V14-ITL 14",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32908_Notebook_Lenovo_V14-ITL_14__Core_I3_1115G4_8GB_256GB_SSD_NVMe_Freedos_10f254ce-grn.jpg",
        "type": "notebook",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 23,
        "name": "Notebook Lenovo IdeaPad 5 14IIL05 14",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34798_Notebook_Lenovo_IdeaPad_5_14IIL05_14__FHD_Core_I7_1065G7_8GB_256GB_SSD_NVMe_W10_Home_96d093dd-grn.jpg",
        "type": "notebook",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 24,
        "name": "Notebook Asus Vivobook M3500",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35281_Notebook_Asus_Vivobook_M3500_OLED_FHD_15.6__Ryzen_7_5800H_16GB_512GB_SSD_NVMe_W11_Home_5ea2a8d2-grn.jpg",
        "type": "notebook",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 25,
        "name": "Teclado Mecanico Redragon Kumara",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29734_Teclado_Mecanico_Redragon_Kumara_K552-KR_Rainbow_Outemu_RED_ESP_f649d333-grn.jpg",
        "type": "teclado",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
   },
   {
        "id": 26,
        "name": "Teclado Gaming Retroiluminado Wesdar",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22542_Teclado_Gaming_Retroiluminado_Wesdar_MK4_BR_d52ff065-grn.jpg",
        "type": "teclado",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 27,
        "name": "Teclado Marvo KG880 Retroiluminado",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26259_Teclado_Marvo_KG880_Retroiluminado_Multimedia_07d9add7-grn.jpg",
        "type": "teclado",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 28,
        "name": "Teclado Mecanico Redragon Fizz Pro",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35396_Teclado_Mecanico_Redragon_Fizz_Pro_K616-RGB_60__Black_9d8e5856-grn.jpg",
        "type": "teclado",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 29,
        "name": "Teclado Mecanico Redragon K619",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35386_Teclado_Mecanico_Redragon_K619_RGB_Horus_FS_Switch_RED_ESP_04660813-grn.jpg",
        "type": "teclado",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
    {
        "id": 30,
        "name": "Teclado Mecanico Marvo Scorpion KG901",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17768_Teclado_Mecanico_Marvo_Scorpion_KG901_Compact_Rainbow_269d9a3b-grn.jpg",
        "type": "teclado",
        "informacion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor ac tellus vulputate ullamcorper."
    },
];