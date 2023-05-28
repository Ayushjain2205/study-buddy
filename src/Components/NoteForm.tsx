import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, FormGroup, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "../App";
import { v4 as uuidV4 } from "uuid";
import FileButton from "./FileButton";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>;

export function NoteForm({
  onSubmit,
  onAddTag,
  availableTags,
  title = "",
  markdown = "",
  tags = [],
}: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);

  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    });
    navigate("..");
  }

  const handleClick = () => {
    setTimeout(() => {
      if (markdownRef.current) {
        markdownRef.current.value = data;
      }
    }, 3000);
  };

  const data = `
# Trigonometric Functions

Trigonometric functions are mathematical functions that relate angles of a right triangle to the ratios of the triangle's sides. They are widely used in various fields such as physics, engineering, and mathematics.

## Sine Function (sin), Cosine Function (cos), Tangent Function (tan)

The sine function (sin), cosine function (cos), and tangent function (tan) are the primary trigonometric functions:

- The sine function, denoted as sin(θ), gives the ratio of the length of the side opposite the angle θ to the length of the hypotenuse in a right triangle.
- The cosine function, denoted as cos(θ), gives the ratio of the length of the adjacent side to the length of the hypotenuse in a right triangle.
- The tangent function, denoted as tan(θ), gives the ratio of the length of the side opposite the angle θ to the length of the adjacent side in a right triangle.

\`\`\`
sin(θ) = Opposite / Hypotenuse
cos(θ) = Adjacent / Hypotenuse
tan(θ) = Opposite / Adjacent
\`\`\`

## Cosecant Function (csc), Secant Function (sec), Cotangent Function (cot)

The cosecant function (csc), secant function (sec), and cotangent function (cot) are the reciprocals of the sine, cosine, and tangent functions, respectively:

\`\`\`
csc(θ) = 1 / sin(θ)
sec(θ) = 1 / cos(θ)
cot(θ) = 1 / tan(θ)
\`\`\`

These trigonometric functions play a fundamental role in solving triangle-related problems, analyzing periodic phenomena, and modeling waveforms. Understanding their properties and relationships is essential for various mathematical applications.

Remember to practice and explore more examples to strengthen your understanding of trigonometric functions!
`;

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <FormGroup controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                ref={titleRef}
                required
                type="text"
                defaultValue={title}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
                theme={(theme) => ({
                  ...theme,
                  borderColor: "#333 !important",
                  borderWidth: "2px !important",
                  outline: "none !important",
                  borderRadius: "255px 25px 225px 25px/25px 225px 25px 255px",
                })}
                isMulti
                options={availableTags.map((tag) => ({
                  value: tag.id,
                  label: tag.label,
                }))}
                value={selectedTags.map((tag) => ({
                  value: tag.id,
                  label: tag.label,
                }))}
                onCreateOption={(label) => {
                  const newTag = {
                    id: uuidV4(),
                    label,
                  };
                  onAddTag(newTag);
                  setSelectedTags((prevTags) => [...prevTags, newTag]);
                }}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => ({
                      id: tag.value,
                      label: tag.label,
                    }))
                  );
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <FileButton />
        <FormGroup controlId="markdown">
          <Form.Label>Prompt</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            placeholder="Enter your prompt here"
          />
        </FormGroup>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button variant="primary" type="button" onClick={handleClick}>
            Generate
          </Button>
        </Stack>
        <FormGroup controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control
            ref={markdownRef}
            required
            as="textarea"
            rows={10}
            defaultValue={markdown}
          />
        </FormGroup>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Link to="..">
            <Button variant="outline-secondary" type="button">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}
