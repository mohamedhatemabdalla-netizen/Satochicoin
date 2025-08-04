const buyButton = document.getElementById('buy-button');
const referralInput = document.getElementById('referral');
const walletAddressInput = document.getElementById('wallet-address');
const amountInput = document.getElementById('amount');
const message = document.getElementById('message');

buyButton.addEventListener('click', () => {
  const wallet = walletAddressInput.value.trim();
  const amount = amountInput.value.trim();
  const referral = referralInput.value.trim();

  if (!wallet || !amount) {
    message.innerText = '❌ برجاء إدخال كل البيانات المطلوبة.';
    return;
  }

  // هنا هنضيف كود الشراء الحقيقي من البلوكشين لاحقًا
  message.innerText = `✅ تم استلام طلب شراء ${amount} STC لمحفظة ${wallet}` + (referral ? ` مع إحالة إلى ${referral}` : '');
});
