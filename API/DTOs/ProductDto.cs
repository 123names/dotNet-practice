using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class ProductDto
    {
        public int id { get; set; }
        [Required]
        public decimal price { get; set; }
        [Required]
        public string ProductName { get; set; }
        [Required]
        public string ProductDescription { get; set; }
    }
}