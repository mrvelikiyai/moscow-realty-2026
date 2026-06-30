export default async function handler(req, res) {
  // Разрешаем только POST-запросы для безопасности
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { rooms, budget, deadline, phone } = req.body;

    // Проверяем наличие обязательного поля
    if (!phone) {
      return res.status(400).json({ message: 'Phone number is required' });
    }

    // Извлекаем секретные переменные окружения, которые мы настроим в Vercel
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Telegram токена или Chat ID не обнаружено в переменных окружения');
      return res.status(500).json({ message: 'Server configuration error' });
    }

    // Формируем красивый текст сообщения для Telegram
    const text = `
🔥 *Новая заявка с Квиза (2026)*
━━━━━━━━━━━━━━━━━━
🏢 *Комнатность:* ${rooms || 'Не указано'}
💰 *Бюджет:* ${budget || 'Не указано'}
📅 *Срок сдачи:* ${deadline || 'Не указано'}
📞 *Телефон:* \`${phone}\`
━━━━━━━━━━━━━━━━━━
💻 _Источник: Лендинг Москва Новостройки_
    `;

    // Отправляем запрос в API Telegram
    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'Markdown'
      })
    });

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error('Ошибка Telegram API:', errorData);
      return res.status(500).json({ message: 'Failed to send Telegram message' });
    }

    // Если всё прошло успешно, возвращаем статус 200
    return res.status(200).json({ success: true, message: 'Lead successfully sent to Telegram' });

  } catch (error) {
    console.error('Критическая ошибка бэкенда:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
