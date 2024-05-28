import TongNotifier from './src/app/TongNotifier';

try {
    // Create an instance of TongNotifier
    const tong = new TongNotifier();

    // Now you can use the notifier instance to call the notify() method
    tong.info("Ting Tong Info !");
    tong.error("Ting Tong Error !");
    tong.warning("Ting Tong Warning !");
} catch (error) {
    throw error
}
