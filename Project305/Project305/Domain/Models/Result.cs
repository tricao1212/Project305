namespace Project305.Domain.Models
{
    public class Result<T> where T : class
    {
        public T? Data { get; set; } = null;
        public string? Message { get; set; } = null;
        public bool IsSuccess { get; set; }
    }
}
