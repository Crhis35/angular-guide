fn add(num_1: i32, num_2: i32) -> i32 {
    num_1 + num_2
}

fn main() {
    let name = "Crhistian";
    let mut sum = add(5, 3);
    let mut _free_shipping = false;

    if sum > 50 {
        println!("{0} {0}", sum);
        _free_shipping = true
    } else if sum > 20 {
        println!("{sum}");
    } else {
        println!("{:?}", sum);
    }

    // match _free_shipping {
    //     true => sum = sum + 0,
    //     false => sum = sum + 5,
    // }

    sum = match _free_shipping {
        true => sum + 0,
        false => sum + 5,
        // _ => sum + 35,
    };
    match sum {
        1 => println!("1"),
        5 => println!("5"),
        _ => println!("No match found"),
    }

    println!("{:?}", name);
    println!("{name}");
    println!("Total: {sum}");

    let items: [i32; 5] = [1, 2, 3, 4, 5];

    println!("{:?}", items);
    let vector_items = vec![1, 2, 3, 4, 5];
    let mut vector_items2 = Vec::new();
    vector_items2.push(1);
    vector_items2.push(2);
    vector_items2.push(3);
    vector_items2.push(4);
    vector_items2.push(5);

    println!("{:?}", vector_items);
    println!("{:?}", vector_items2);
}
