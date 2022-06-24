use base64::{decode, encode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;
use std::io::Cursor;
use wasm_bindgen::prelude::*;
use web_sys::console::log_1 as log;

#[wasm_bindgen]
pub fn grayscale(_encoded_file: &str) -> String {
    log(&"Grayscale called".into());
    let result = decode(_encoded_file).unwrap();
    log(&"Image decoded".into());

    let mut img = load_from_memory(&result).unwrap();
    log(&"Image loaded".into());

    img = img.grayscale();
    log(&"Grayscale effect applied".into());
    let mut buffer = vec![];
    let mut writer = Cursor::new(&mut buffer);

    img.write_to(&mut writer, Png).unwrap();
    log(&"New image written".into());

    let encoded = encode(&buffer);
    let data_url = format!("data:image/png;base64,{encoded}");

    data_url
}
