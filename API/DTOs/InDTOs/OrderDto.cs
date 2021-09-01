using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class OrderDto
    {
        [Required]
        public int userId { get; set; }
        [Required]
        public OrderItemDto [] productsList { get; set; }
    }
}