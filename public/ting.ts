import TongNotifier from '../src/app/TongNotifier';

try {
    // Create an instance of TongNotifier
    const notifier = new TongNotifier();

    // Now you can use the notifier instance to call the sendNotification method
    notifier.sendNotification("Ting Tong !");
    notifier.sendNotification("Ting Tong Info !", 'info');
    notifier.sendNotification("Ting Tong Error !", 'error');
    notifier.sendNotification("Ting Tong Warning !", 'warning');
} catch(error) {
    throw error
}
