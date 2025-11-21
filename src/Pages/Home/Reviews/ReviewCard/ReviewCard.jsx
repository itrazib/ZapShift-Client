

const ReviewCard = ({review}) => {
  const {review:testimonial, userName} = review;
 
  return (
    <div class="w-full max-w-xs bg-white rounded-2xl p-6 shadow-sm space-y-4">
      <div class="text-3xl text-teal-300">❝</div>

      <p class="text-gray-600 text-sm leading-relaxed">
      {testimonial}
      </p>

      <div class="border-t border-dotted border-gray-300 pt-3"></div>

      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-teal-900 rounded-full"></div>

        <div>
          <h3 class="font-semibold text-gray-800">{userName}</h3>
          <p class="text-gray-500 text-xs">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
